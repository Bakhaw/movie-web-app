function IconArrowBarLeft(props: React.SVGProps<SVGSVGElement>) {
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
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M4 12h10M4 12l4 4M4 12l4-4M20 4v16" />
    </svg>
  );
}

export default IconArrowBarLeft;
