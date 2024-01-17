import { TriangleUpIcon } from '@radix-ui/react-icons';

function FeedbackList() {
  return (
    <ol className='feedback-list'>
      <li className='feedback'>
        <button>
          <TriangleUpIcon />
          <span>123</span>
        </button>
        <div>
          <p>B</p>
        </div>
        <div>
          <p>Iris</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            quis consequatur, tenetur ab labore aliquam quam praesentium sint
            dolorum aliquid!
          </p>
        </div>
        <p>4d</p>
      </li>
    </ol>
  );
}

export default FeedbackList;
