import { useState, useEffect, startTransition } from "react";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/product";
import { Category } from "@/models/category";
import Header from "@/components/Header";
import SearchSection from "@/components/SearchSection";
import styled from "styled-components";
import Products from "@/components/Products";

const Shop = ({ allProducts, allCategories }) => {
  const [query, setQuery] = useState("");
  const [isHover, setIsHover] = useState(false);
  const [isHoverBtn, setIsHoverBtn] = useState(false);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedParentCategory, setSelectedParentCategory] = useState("");
  useEffect(() => {
    setCategories([...allCategories]);
    setProducts([...allProducts]);
  }, [allCategories, allProducts]);
  const uniqueParentCategories = categories.reduce((acc, cat) => {
    if (cat.parentCategory && !acc.includes(cat.parentCategory)) {
      acc.push(cat.parentCategory);
    }
    return acc;
  }, []);
  const filteredCategories = categories.filter(
    (cat) => cat.parentCategory === selectedParentCategory
  );
  const filterProductsByCategory = (categoryId) => {
    startTransition(() => {
      if (categoryId === "") {
        setProducts([...allProducts]);
      } else {
        setProducts(
          allProducts.filter((product) => product.category === categoryId)
        );
      }
    });
  };
  const handelselectCategory = (selectCat) => {
    setSelectedParentCategory(selectCat);
  };
  const handleMouseOver = () => {
    setIsHover(true);
  };
  const handleMouseOut = () => {
    setIsHover(false);
  };
  const MouseOverList = (parentCategory) => {
    handelselectCategory(parentCategory);
    setIsHover(true);
    setIsHoverBtn(true);
  };
  const MouseOutList = () => {
    setIsHover(false);
    setIsHoverBtn(false);
  };

  return (
    <>
      <Header />
      <SearchSection
        query={query}
        setQuery={setQuery}
        allProducts={allProducts}
      />
      <Content>
        <Filters>
          <Categories>
            <ButtonSection onClick={() => setProducts(allProducts)}>
              All Categories
            </ButtonSection>
            <ParentCategory>
              {uniqueParentCategories.map((parentCategory) => (
                <Button
                  key={parentCategory}
                  onMouseOut={MouseOutList}
                  onMouseOver={() => MouseOverList(parentCategory)}
                  isHover={isHover}
                  isHoverBtn={isHoverBtn}
                >
                  <span
                    onMouseOut={MouseOutList}
                    onMouseOver={MouseOverList}
                    isHover={isHover}
                    isHoverBtn={isHoverBtn}
                  >
                    {parentCategory}
                  </span>
                </Button>
              ))}
            </ParentCategory>
            {!!isHover && (
              <ListCategories
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                isHover={isHover}
              >
                {selectedParentCategory &&
                  filteredCategories.map((filterCategory) => (
                    <button
                      onClick={() =>
                        filterProductsByCategory(filterCategory._id)
                      }
                      key={filterCategory._id}
                    >
                      {filterCategory.name}
                    </button>
                  ))}
              </ListCategories>
            )}
          </Categories>
          <Price>
            <span>Price</span>
          </Price>
          <Colors>
            <span>Colors</span>
          </Colors>
          <Size>
            <span>Size</span>
          </Size>
        </Filters>
        <AllProducts>
          <Sorties>Sort</Sorties>
          <Products
            query={query}
            setQuery={setQuery}
            categories={categories}
            setCategories={setCategories}
            products={products}
          />
        </AllProducts>
      </Content>
    </>
  );
};

const Content = styled.div`
  margin-top: 120px;
  display: grid;
  grid-template-columns: 220px 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "Filters AllProducts" "Filters  AllProducts";
  gap: 6px;
  padding-inline: 10px;
`;
const Filters = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  grid-area: Filters;
  gap: 10px;
  border-radius: 3px;
  /* box-shadow: 0 0 3px rgba(0, 0, 0, 0.4); */
`;
const Sorties = styled.div`
  /* grid-area: Sorties; */
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #6411ad;
  color: #fff;
`;
const AllProducts = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  grid-area: AllProducts;
  background-color: #fafafa;
  border-radius: 3px;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
`;
const Categories = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: #fff; */
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  width: 100%;
  overflow: hidden;
  /* text-justify: center; */
`;
const ButtonSection = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  height: 26px;
  color: #fff;
  background-color: #6411ad;
  font-size: 13px;
  font-weight: bold;
  text-align: center;
  &:hover {
    background-color: #ff8500;
  }
`;
const ParentCategory = styled.div`
  flex-direction: column;
  display: flex;
  width: 100%;
`;
const Button = styled.button`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding-block: 8px;
  border: none;
  width: 100%;
  border: 1px solid transparent;
  transition: all 0.1s ease-in-out;
  cursor: pointer;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  &:hover {
    z-index: ${(props) => (props.isHoverBtn ? 9 : -1)};
    color: #ff8500;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);

    background-color: #fff;
  }
`;
const ListCategories = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: #fff;
  top: 146px;
  left: 228px;
  width: 170px;
  height: 170px;
  border-radius: 3px;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.3);
  transition: all 0.1s ease-in;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  opacity: ${(props) => (props.isHover ? 1 : 0)};
  z-index: ${(props) => (props.isHover ? 8 : -1)};
  span {
    text-align: center;
    padding-top: 6px;
    height: 24px;
    width: 100%;
    background-color: #6411ad;
    color: #fff;
    font-size: 13px;
    font-weight: bold;
  }
  button {
    padding-block: 8px;
    border: none;
    background-color: #fff;
    width: 100%;
    border: 1px solid transparent;
    transition: all 0.1s ease-in-out;
    cursor: pointer;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    &:hover {
      color: #ff8500;
      background-color: #f6f6f6;
    }
  }
`;
const Price = styled.div``;
const Colors = styled.div``;
const Size = styled.div``;

export default Shop;

export async function getServerSideProps() {
  await mongooseConnect();
  const allProducts = await Product.find().lean({});
  const allCategories = await Category.find().lean({});

  return {
    props: {
      allProducts: JSON.parse(JSON.stringify(allProducts)),
      allCategories: JSON.parse(JSON.stringify(allCategories)),
      revalidate: 360,
    },
  };
}
