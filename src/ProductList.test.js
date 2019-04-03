import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import ProductList from './ProductList';

let TEST_DATA;
let output;
let testingFn;

beforeEach( () => {
  testingFn = jest.fn();
  TEST_DATA = [
    {id: 1, name: 'computer', price: 1000},
    {id: 2, name: 'anker mouse', price: 50},
    {id: 3, name: 'computer stand', price: 20}
  ];
   output = shallow(
   <ProductList 
    onProductBuy={testingFn} 
    products={TEST_DATA}/>);
});


it('renders products on the page', () => { 
  expect(output.find('li').length).toEqual(3);
});

it('renders the price of the product', () => { 
  const firstProduct = output.find('li').first(); 
  expect(firstProduct.text()).toMatch(/1000/);
});

it('calls onProductBuy when the element is clicked', () => {
  const firstProduct = output.find('li').first(); 
  // First, check that nobody has called our function yet.
  expect(testingFn.mock.calls.length).toEqual(0);
  firstProduct.simulate('click');
  expect(testingFn.mock.calls.length).toEqual(1);
  // Check the first call to this function has the argument of 1
  expect(testingFn.mock.calls[0][0]).toEqual(1);
});

it('has one button', () => {
  const firstProduct = output.find('li').first(); 
  const button = expect(firstProduct.find('button').length).toBe(1);
});

it('matches our snapshot', () => {
  expect(output).toMatchSnapshot();
});
