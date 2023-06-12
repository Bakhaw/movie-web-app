function IconTv(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M4 7 H20 A2 2 0 0 1 22 9 V20 A2 2 0 0 1 20 22 H4 A2 2 0 0 1 2 20 V9 A2 2 0 0 1 4 7 z" />
      <path d="M17 2l-5 5-5-5" />
    </svg>
  );
}

export default IconTv;
