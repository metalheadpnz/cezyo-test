import styled from 'styled-components'
import imageLageLink from '../assets/mock/big-image-product.png'
import imageSmallLink from '../assets/mock/small-image-product.png'
import { colors } from '../styles/colors.ts'
import { Button } from './Button.tsx'
import ChevronLeft from '../assets/icons/chevron-left.svg?react'
import { Back } from './Back.tsx'
import React from 'react'

const ProductName = styled.p`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 30px;
`

const ProductContainer = styled.div`
  display: flex;
  gap: 20px;
`

const ProductImagesContainer = styled.div``

const ProductInfoContainer = styled.div`
  background-color: ${colors.buttonBackground};
  min-width: 477px;
  height: 273px;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & * {
    flex-shrink: 0;
  }
`

const Price = styled.span`
  font-size: 30px;
  font-weight: 700;

  span {
    font-size: 16px;
    font-weight: 400;
  }
`

const ProductInfo = styled.div`
  span {
    font-size: 16px;
    font-weight: 600;
  }
`

const ProductVariantContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`

const ProductVariant = styled(Button)<{ isSelected?: boolean }>`
  height: 38px;
  max-width: 450px;
  padding: 0 10px;
  border-radius: 35px;
  font-size: 16px;
  font-weight: 600;
  border: 1px solid
    ${({ isSelected }) => (isSelected ? colors.accent : colors.gray)};
  color: ${({ isSelected }) => (isSelected ? colors.accent : colors.primary)};
`

const AddToCart = styled(Button)`
  color: ${colors.background};
  background-color: ${colors.accent};
  height: 50px;
  border-radius: 51px;
  display: block;
  width: 100%;
  font-size: 16px;
  font-weight: 600;
  padding: 0 10px;
`

const LargeImage = styled.div`
  width: 450px;
  height: 450px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`
const PreviewSlider = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`
const PreviewItem = styled.div`
  width: 65px;
  height: 70px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

const ChevronRight = styled(ChevronLeft)`
  color: ${colors.accent};
  transform: scaleX(-1);
`
const Wrapper = styled.div`
  margin-top: 1rem;
`

export const ProductView = () => {
  const { productName, productColor, price, imageLage, imageSmall, preview } = {
    productName: 'Смартфон Xiaomi Redmi Note 8 Pro 6/128GB',
    productColor: 'изумрудный',
    price: '17 990₽',
    imageLage: imageLageLink,
    imageSmall: imageSmallLink,
    preview: ['link1', 'link2', 'link3', 'link4', 'link5'],
  }

  return (
    <>
      <Back />
      <Wrapper>
        <ProductName>
          {productName}, {productColor}
        </ProductName>
        <ProductContainer>
          <ProductImagesContainer>
            <LargeImage>
              <img src={imageLage} alt="" />
            </LargeImage>
            <PreviewSlider>
              {preview.map((el) => (
                <PreviewItem key={el}>
                  <img src={imageSmall} alt="" />
                </PreviewItem>
              ))}
              <ChevronRight />
            </PreviewSlider>
          </ProductImagesContainer>
          <ProductInfoContainer>
            <Price>
              {price}
              <span>&nbsp;за шт.</span>
            </Price>
            <ProductInfo>
              <span>Размер</span>
            </ProductInfo>
            <ProductVariantContainer>
              <ProductVariant isSelected>30см / 650гр.</ProductVariant>
              <ProductVariant className={'active'}>
                40см / 1050гр. +300₽
              </ProductVariant>
            </ProductVariantContainer>
            <AddToCart>В корзину за {price}</AddToCart>
          </ProductInfoContainer>
        </ProductContainer>
      </Wrapper>
    </>
  )
}
