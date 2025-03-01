import { Arrow } from '../../components/configs';
import MatrixGrid from '../../components/MatrixGrid';

const arrowsPlayer1: Arrow[] = [
    { fromRow: 0, fromCol: 0, toRow: 0, toCol: 1, probability: 0.5 },
    { fromRow: 0, fromCol: 0, toRow: 1, toCol: 0, probability: 0.5 },
    { fromRow: 0, fromCol: 1, toRow: 0, toCol: 0, probability: 0.2 },
    { fromRow: 0, fromCol: 1, toRow: 1, toCol: 1, probability: 0.35 },
    { fromRow: 0, fromCol: 1, toRow: 0, toCol: 2, probability: 0.45 },
    { fromRow: 0, fromCol: 2, toRow: 0, toCol: 1, probability: 0.2 },
    { fromRow: 0, fromCol: 2, toRow: 1, toCol: 2, probability: 0.8 },
    { fromRow: 1, fromCol: 0, toRow: 0, toCol: 0, probability: 0.1 },
    { fromRow: 1, fromCol: 0, toRow: 1, toCol: 1, probability: 0.9 },
    { fromRow: 1, fromCol: 0, toRow: 2, toCol: 0, probability: 0 },
    { fromRow: 1, fromCol: 1, toRow: 1, toCol: 0, probability: 0.1 },
    { fromRow: 1, fromCol: 1, toRow: 1, toCol: 2, probability: 0.7 },
    { fromRow: 1, fromCol: 1, toRow: 0, toCol: 1, probability: 0.1 },
    { fromRow: 1, fromCol: 1, toRow: 2, toCol: 1, probability: 0.1 },
    { fromRow: 1, fromCol: 2, toRow: 1, toCol: 1, probability: 0.9 },
    { fromRow: 1, fromCol: 2, toRow: 0, toCol: 2, probability: 0 },
    { fromRow: 1, fromCol: 2, toRow: 2, toCol: 2, probability: 0.1 },
    { fromRow: 2, fromCol: 0, toRow: 2, toCol: 1, probability: 0.4 },
    { fromRow: 2, fromCol: 0, toRow: 1, toCol: 0, probability: 0.6 },
    { fromRow: 2, fromCol: 1, toRow: 2, toCol: 0, probability: 0 },
    { fromRow: 2, fromCol: 1, toRow: 1, toCol: 1, probability: 0 },
    { fromRow: 2, fromCol: 1, toRow: 2, toCol: 2, probability: 1 },
    { fromRow: 2, fromCol: 2, toRow: 2, toCol: 1, probability: 0.3 },
    { fromRow: 2, fromCol: 2, toRow: 1, toCol: 2, probability: 0.7 },
];
  



function OptimalPolicyPage() {
  return (
    <div className="optimal-strategyPage">
      
      <MatrixGrid arrowsPlayer1={arrowsPlayer1} header='Optimal Policy'/>
    </div>
  );
}

export default OptimalPolicyPage;
