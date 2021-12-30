interface ChildProps {
  color: string;
  handleClick: () => void;
}

export function Child({ color, handleClick }: ChildProps) {
  return (
    <div>
      {color}
      <button onClick={handleClick}>Clicl Me</button>
    </div>
  );
}
export const ChildAsFC: React.FC<ChildProps> = ({
  color,
  handleClick,
  children,
}) => {
  return (
    <div>
      {color}
      {children}
      <button onClick={handleClick}>Clicl Me</button>
    </div>
  );
};

ChildAsFC.displayName;
