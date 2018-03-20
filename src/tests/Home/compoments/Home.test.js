import React from 'react';
import { shallow } from 'enzyme';
import Home from '../../../app/pages/Home/compoments/Home';

const setup = () => {
  // 模拟 props
  const props = {
    // Jest 提供的mock 函数
    count: 0,
    increment: jest.fn(),
    doubleAsync: jest.fn()
  };

  const wrapper = shallow(<Home {...props} />);
  return {
    props,
    wrapper
  };
};
test('should behave...', () => {
  const { wrapper } = setup();
  expect(wrapper.find('Button').exists());
});

it('点击新增按钮, increment() shoule be called', () => {
  const { wrapper, props } = setup();
  // 通过 Enzyme 提供的 simulate api 模拟 DOM 事件
  wrapper.find('#btn').simulate('click');
  // 判断 props.increment 是否被调用
  expect(props.increment).toBeCalled();
});
