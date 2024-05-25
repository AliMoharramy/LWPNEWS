export default function SectionHead({
  title,
  gonext,
  goback,
}: {
  title: string;
  gonext: Function;
  goback: Function;
}) {
  return (
    <div className="flex flex-row justify-between my-6 items-center">
      <h4 className="popualrtitle relative before:bg-Primary">{title}</h4>
      <div className="flex flex-row">
        <button onClick={(e) => goback()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            className="w-10 bg-Gray mx-2 fill-Black50 p-4 py-3 rounded-xl"
          >
            <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
        </button>
        <button onClick={(e) => gonext()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            className="w-10 bg-Gray mx-1 p-4 py-3 rounded-xl"
          >
            <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
