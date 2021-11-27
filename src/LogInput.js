import React from "react";
import Input from "./Input";


const withLogInput = Input => {
  function LogInput(props) {
    const { data, onClick } = props;
    const _printLog = (value) => {
      console.log(
        `Input logId: ${JSON.stringify(
          value
        )}, LogInput logId: ${JSON.stringify(data)}`
      );
      onClick();
    };
    const nextProps = Object.assign({}, { ...props }, { onClick: _printLog });
    return <Input {...nextProps} />;
  }
  return LogInput;
}
const LogInput = withLogInput(Input);
export default LogInput;
