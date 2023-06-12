interface BioProps {
  overview: string;
  title: string;
}

const Bio: React.FC<BioProps> = ({ overview, title }) => (
  <div>
    <h1 className="text-5xl font-bold mb-2">{title}</h1>
    <p>{overview}</p>
  </div>
);

export default Bio;
