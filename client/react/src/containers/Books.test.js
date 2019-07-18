import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {Books} from './Books';

import AddBook from '../components/AddBook';
import Book from '../components/Book';

configure({adapter: new Adapter()});

const demoData = [
    { 
        id: 1, 
        name: 'Learning React', 
        description: 'Description React',
        count: 5,
        author: 'Author React'
    }
]

describe('<Books />', ()=>{
    let wrapper;

    beforeEach(()=>{
        wrapper = shallow(<Books fetchBooks={()=>{ }} books={[]}/>);
    });

    it('should render <Add Book /> control',()=>{
        expect(wrapper.find(AddBook)).toHaveLength(1);
    });

    it('should not render <Book /> control initially',()=>{
        expect(wrapper.find(Book)).toHaveLength(0);
    });

    it('should render <Book /> control',()=>{
        wrapper.setProps({books: demoData});
        expect(wrapper.find(Book)).toHaveLength(1);
    });

    it('<Book /> control data should match with demo data',()=>{
        wrapper.setProps({books: demoData});
        let bookProps = wrapper.find(Book).props();
        expect(bookProps.name).toEqual('Learning React');
        expect(bookProps.description).toEqual('Description React');
        expect(bookProps.count).toEqual(5);
        expect(bookProps.author).toEqual('Author React');
    });
});