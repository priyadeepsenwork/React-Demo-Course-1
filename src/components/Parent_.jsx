import { Child_ } from "./Child_";

export const Parent_ = () => {
  return (
  <Child_ 
  name="This is a Prop" 
  age={22} 
  isMarried={false}
  hobbies = {
    ["Coding", "Listening Music", "Sleeping"]
  }
  img="https://avatars.githubusercontent.com/u/194576216?v=4"
  />
);
};
