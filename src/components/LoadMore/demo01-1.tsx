import { LoadMore ,LoadMoreType} from './demo01';

const LoadMoreList1Component = LoadMore as LoadMoreType<{text:string}>

const LoadMoreList2Component = LoadMore as LoadMoreType<{value:string}>


export {
    LoadMoreList1Component,
    LoadMoreList2Component
}