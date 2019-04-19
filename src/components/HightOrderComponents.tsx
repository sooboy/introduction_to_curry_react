// import * as React from 'react';

// interface LoadMoreProps<T>
// {
//     fn: ( page: number ) => Promise<T[]>
// }

// interface ListComponents<T>{
//     items:T[]
// }

// const withLoadMore = <I, T extends ListComponents<I>> ( BaseComponent: React.ComponentType<T> ) =>
// {

//     return class extends React.Component<LoadMoreProps<I>> {
//         render ()
//         {
//             return (
//                 <div>

//                     <BaseComponent
                       
//                     />
//                     <div className="loadMore">
//                         loadMore
//                     </div>
//                 </div>
//             )
//         }
//     }
// }