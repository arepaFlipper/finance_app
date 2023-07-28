import DashboardBox from './DashboardBox';
import { useGetTransactionsQuery, useGetProductsQuery, useGetkpisQuery } from '@/state/api';

const Row3 = () => {
  const { data: kpisData } = useGetkpisQuery();
  const { data: productData } = useGetProductsQuery();
  const { data: transactionsData } = useGetTransactionsQuery();
  return (
    <>
      <DashboardBox gridArea="g"></DashboardBox>
      <DashboardBox gridArea="h"></DashboardBox>
      <DashboardBox gridArea="i"></DashboardBox>
      <DashboardBox gridArea="j"></DashboardBox>
    </>
  )
}

export default Row3;
