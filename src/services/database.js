import db from '../index';

const getProducts = () => {
  return  db.collection('products').get();
    // console.log(
    //   result.docs.forEach((doc) => {
    //     console.log(
    //       doc.data().processes.forEach((process) => {
    //         console.log(process);
    //       })
    //     );
    //   })
    // );
  //   console.log(
  //     result.docs.forEach((doc) => {
  //       console.log(doc.data().name);
  //     })
  //   );
  // } catch (error) {
  //   console.log(error);
  // }
// };
}
export default getProducts;
