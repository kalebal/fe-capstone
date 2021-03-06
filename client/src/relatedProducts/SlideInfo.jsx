import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import StarRow from '../starRow.jsx';


const SlideInfo = (props) => {
  let average = 0;
  //calculate average review for star Row
  if (props.reviewData) {
    average = (props.reviewData.sum / props.reviewData.count) * 20;
  }
  //if the item is on sale, put sale price in red and strikethrough original price
  let saleSection = <p> {props.data.default_price}</p>;
  if (props.defaultStyle.sale_price) {
    saleSection = (
      <p>
        <SalePrice>{props.defaultStyle.sale_price}</SalePrice>
        <s>{props.defaultStyle.original_price}</s>
      </p>);
  }
  return (
    <div className={props.className}>
      <p> {props.data.category} </p>
      <p> {props.data.name} </p>
      {saleSection}
      <StarRow rating={average} size={20}></StarRow>
    </div>
  );
};

SlideInfo.propTypes = {
  className: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  defaultStyle: PropTypes.object,
  reviewData: PropTypes.object
};

const SalePrice = styled.p`
  color: red;
`;

const StyledSlideInfo = styled(SlideInfo)`
  width: 200px;
  height: 100px;
  background: linear-gradient(0deg, #181818 30%, #50505088 100%);

  p {
    color: white;
    margin: 0.5rem;
  }
   &:hover {
      box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
      transition: all 0.3s cubic-bezier(.25,.8,.25,1);
   }
`;

export default StyledSlideInfo;
