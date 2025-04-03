import Card from "../Exercises/Card";

const Card_Parent = () => {
  return (
    <div>
      <Card>
        <h3>This is my Card</h3>
        <p>This is some content for card</p>
      </Card>
      <Card>
        <h3>This is my Card 2</h3>
        <p>This is some content for card 3</p>
      </Card>
      <Card>
        <h3>This is my Card 2</h3>
        <p>This is some content for card 3</p>
      </Card>
    </div>
  );
};

export default Card_Parent;
