import { Button, VStack } from "@chakra-ui/react";
import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  const incCount = () => {
    setCount(count => count + 1);
  };

  const decCount = () => {
    setCount(count => count - 1);
  };

  return (
    <VStack>
      <Button onClick={incCount}>+</Button>
      <div>{count}</div>
      <Button onClick={decCount}>-</Button>
    </VStack>
  );
}
