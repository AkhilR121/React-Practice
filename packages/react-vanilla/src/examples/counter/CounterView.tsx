import { Button, Text, VStack } from "@chakra-ui/react";

export type CounterViewProps = {
  readonly count: number;
  onInc(): void;
  onDec(): void;
};

export const CounterView = ({ count, onInc, onDec }: CounterViewProps) => {
  return (
    <VStack>
      <Button onClick={onInc} colorScheme="blue">
        Increment
      </Button>
      <Text>{count}</Text>
      <Button onClick={onDec}>Decrement</Button>
    </VStack>
  );
};
