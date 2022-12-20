import { Fragment } from "react";

const TechStack = (props) => {
  const { stack } = props;

  return (
    <Fragment>{
      stack.map((item) => (
        <div style={{ marginBottom: '4px'}}>
          <img src={item.src} />
          <a href={`${item.href}`}>{item.name}</a>
        </div>
      ))
    }
    </Fragment>
  )
}

export default TechStack;