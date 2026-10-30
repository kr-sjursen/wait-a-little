import { Timer } from '../components/feature/Timer';
import { Goals } from '../components/feature/Goals';

export default function Home() {
  return (
    <>
      <h1 className='text-2xl mb-4'>Wait a Little</h1>
      <Timer />
      <Goals />
    </>
  );
}
