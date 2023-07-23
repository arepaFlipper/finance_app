import { useGetProductsQuery } from '@/state/api';
import DashboardBox from './DashboardBox';
type Props = {}

const Row2 = ({ }: Props) => {
  const { data } = useGetProductsQuery();
  return (
    <>
      <DashboardBox gridArea="d"></DashboardBox>
      <DashboardBox gridArea="e"></DashboardBox>
      <DashboardBox gridArea="f"></DashboardBox>
    </>
  )
}

export default Row2
