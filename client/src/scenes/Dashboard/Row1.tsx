import { useGetkpisQuery } from '@/state/api';
import DashboardBox from './DashboardBox';
type Props = {}

const Row1 = ({ }: Props) => {
  const { data } = useGetkpisQuery();
  return (
    <>
      <DashboardBox gridArea="a"></DashboardBox>
      <DashboardBox gridArea="b"></DashboardBox>
      <DashboardBox gridArea="c"></DashboardBox>
    </>
  )
}

export default Row1
