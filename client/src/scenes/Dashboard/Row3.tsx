import DashboardBox from './DashboardBox';
import { useGetTransactionsQuery } from '@/state/api';
type Props = {}

const Row3 = (props: Props) => {
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
