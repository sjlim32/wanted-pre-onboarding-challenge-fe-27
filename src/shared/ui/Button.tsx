import styled, { css } from 'styled-components';

type BtnColor = 'blue' | 'green' | 'red' | 'default';
type BtnSize = 1 | 2 | 3;

const BtnTheme = {
  color: {
    blue: '#a6c8ff70',
    green: '#b6e84970',
    red: '#ff9aa270',
    default: '#CD8E7D25',
  },
  size: {
    1: css`
      height: 2rem;
      width: 7rem;
      font-size: 1rem;
    `,
    2: css`
      height: 3rem;
      width: 10rem;
      font-size: 1.2rem;
    `,
    3: css`
      height: 4rem;
      width: 14rem;
      font-size: 1.5rem;
    `,
  },
};

const ButtonStyle = styled.button<{ color: BtnColor; size: BtnSize }>`
  border-radius: 0.5rem;
  border: 1px solid #cd8e90;
  font-weight: bold;
  background-color: ${({ color }) => BtnTheme.color[color]};
  ${({ size }) => BtnTheme.size[size]};

  &:hover {
    opacity: 0.9;
  }
`;

interface ButtonProps {
  title: string; // 버튼 텍스트
  onClick?: () => void; // 클릭 이벤트 핸들러
  color?: BtnColor; // 버튼 색상
  size?: BtnSize; // 버튼 크기
}

export default function Button({ title, onClick, color = 'default', size = 2 }: ButtonProps) {
  return (
    <ButtonStyle color={color} size={size} onClick={onClick}>
      {title}
    </ButtonStyle>
  );
}
