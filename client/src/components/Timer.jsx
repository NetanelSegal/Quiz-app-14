import { useTimer } from '../hooks/useTimer';
import useToggle from '../hooks/useToggle';

export default function Timer() {
  const { time, start, stop } = useTimer();
  const { toggle, switchToggle } = useToggle();
  const { toggle: divToggle, switchToggle: divSwitchToggle } = useToggle(true);
  return (
    <div>
      <p>Time: {time}</p>
      <button
        className={`px-10 py-2 border ${toggle ? 'bg-red-500' : 'bg-blue-500'}`}
        onClick={() => {
          stop();
          switchToggle();
        }}
      >
        Stop
      </button>
      <button className="px-10 py-2 border" onClick={start}>
        Start
      </button>

      <div
        onClick={divSwitchToggle}
        className={`bg-white ${
          divToggle ? 'size-8' : 'size-36'
        } transition-all duration-150 ease-in-out`}
      ></div>
    </div>
  );
}
