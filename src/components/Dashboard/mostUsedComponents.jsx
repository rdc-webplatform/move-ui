const MostUsedComponents = (props) => {
  let MostUsedComponents;

  if (!props.mostUsedComponents) {
    MostUsedComponents = ['Button', 'Avatar', 'Dropdown'];
  } else {
    const { mostUsedComponents } = props;
    MostUsedComponents = mostUsedComponents;
  }

  return (
    <div>
      {MostUsedComponents.map((component) => <div>{component}</div>)}
    </div>
  );
}

export default MostUsedComponents;