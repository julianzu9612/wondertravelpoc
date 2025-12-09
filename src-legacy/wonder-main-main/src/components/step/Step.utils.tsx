export type typeIconStep =
  | 'start'
  | 'isologo-start'
  | 'icon'
  | 'card'
  | 'end'
  | 'day'
  | 'roundtrip'
  | 'isologo-step'
  | 'isologo-end'
  | 'step'
  | null;
export const returnIconStep = ({
  type,
  urlIcon,
  highlightColor,
}: {
  type?: typeIconStep;
  urlIcon?: string | null;
  highlightColor?: string | null;
}) => {
  switch (type) {
    case 'start':
      return (
        <svg
          width='100%'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle cx='50%' cy='50%' r={8} fill='#FF6549' />
        </svg>
      );
    case 'isologo-start':
      return (
        <svg
          width='100%'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M10.457 19.086C15.7274 19.086 20 14.8135 20 9.54302C20 4.27256 15.7274 0 10.457 0C5.18652 0 0.913963 4.27256 0.913963 9.54302C0.913963 11.3159 1.3974 12.9758 2.23964 14.3982L1.0837 16.6407L0.0770665 18.5898C-0.258505 19.5643 0.580329 19.5643 1.08371 19.4019L1.58705 19.2394L5.44847 17.8313C6.87087 18.6736 8.68412 19.086 10.457 19.086Z'
            fill='#FF6549'
          />
          <path
            d='M14.4341 4.59007L4.72362 8.60818C4.22136 9.11044 4.72362 9.54994 5.22589 9.61272C5.6277 9.66294 7.6256 10.0801 8.57432 10.2824C8.70451 10.2824 8.98722 10.3829 9.07658 10.7847C9.24401 10.9521 9.5345 14.2118 9.74627 14.6354C9.91369 14.9702 10.0811 14.9702 10.2485 14.9702C10.3825 14.9702 10.5276 14.747 10.5834 14.6354L15.2712 5.25976C15.327 5.09233 15.3716 4.724 15.1038 4.59007C14.9698 4.45613 14.6015 4.53426 14.4341 4.59007Z'
            fill='white'
            stroke='white'
            strokeWidth='0.491046'
          />
        </svg>
      );
    case 'icon':
      return (
        <svg
          width={20}
          height='100%'
          viewBox='0 0 20 80'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle cx={10} cy={40} r={10} fill='#FF6549' />
          <image x={4} y={37} href={urlIcon ?? ''} width='12' />
          <line x1='50%' y1={40} x2='50%' y2='1z0%' stroke='#FF6549' />
        </svg>
      );
    case 'day':
      return (
        <svg
          width={20}
          height='100%'
          viewBox='0 0 20 80'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <line x1={10} y1={0} x2={10} y2='110%' stroke='#FF6549' />
        </svg>
      );
    case 'card':
      return (
        <svg
          width={20}
          height={80}
          viewBox='0 0 20 80'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle
            cx={10}
            cy={40}
            r={10}
            fill={highlightColor ? highlightColor : '#FF6549'}
          />
          <image x={4} y={34} href={urlIcon ?? ''} width='12' />
        </svg>
      );
    case 'end':
      return (
        <svg
          width='20'
          height='20'
          viewBox='0 0 20 22'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle
            cx='50%'
            cy='50%'
            r={8}
            fill={highlightColor ? highlightColor : '#FF6549'}
          />
          <image x={3} y={36} href={urlIcon ?? ''} width='13' />
        </svg>
      );
    case 'isologo-end':
      return (
        <svg
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M10.457 19.086C15.7274 19.086 20 14.8135 20 9.54302C20 4.27256 15.7274 0 10.457 0C5.18652 0 0.913963 4.27256 0.913963 9.54302C0.913963 11.3159 1.3974 12.9758 2.23964 14.3982L1.0837 16.6407L0.0770665 18.5898C-0.258505 19.5643 0.580329 19.5643 1.08371 19.4019L1.58705 19.2394L5.44847 17.8313C6.87087 18.6736 8.68412 19.086 10.457 19.086Z'
            fill='#FF6549'
          />
          <path
            d='M14.4341 4.59007L4.72362 8.60818C4.22136 9.11044 4.72362 9.54994 5.22589 9.61272C5.6277 9.66294 7.6256 10.0801 8.57432 10.2824C8.70451 10.2824 8.98722 10.3829 9.07658 10.7847C9.24401 10.9521 9.5345 14.2118 9.74627 14.6354C9.91369 14.9702 10.0811 14.9702 10.2485 14.9702C10.3825 14.9702 10.5276 14.747 10.5834 14.6354L15.2712 5.25976C15.327 5.09233 15.3716 4.724 15.1038 4.59007C14.9698 4.45613 14.6015 4.53426 14.4341 4.59007Z'
            fill='white'
            stroke='white'
            strokeWidth='0.491046'
          />
        </svg>
      );

    case 'isologo-step':
      return (
        <svg
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M10.457 19.086C15.7274 19.086 20 14.8135 20 9.54302C20 4.27256 15.7274 0 10.457 0C5.18652 0 0.913963 4.27256 0.913963 9.54302C0.913963 11.3159 1.3974 12.9758 2.23964 14.3982L1.0837 16.6407L0.0770665 18.5898C-0.258505 19.5643 0.580329 19.5643 1.08371 19.4019L1.58705 19.2394L5.44847 17.8313C6.87087 18.6736 8.68412 19.086 10.457 19.086Z'
            fill='#FF6549'
          />
          <path
            d='M14.4341 4.59007L4.72362 8.60818C4.22136 9.11044 4.72362 9.54994 5.22589 9.61272C5.6277 9.66294 7.6256 10.0801 8.57432 10.2824C8.70451 10.2824 8.98722 10.3829 9.07658 10.7847C9.24401 10.9521 9.5345 14.2118 9.74627 14.6354C9.91369 14.9702 10.0811 14.9702 10.2485 14.9702C10.3825 14.9702 10.5276 14.747 10.5834 14.6354L15.2712 5.25976C15.327 5.09233 15.3716 4.724 15.1038 4.59007C14.9698 4.45613 14.6015 4.53426 14.4341 4.59007Z'
            fill='white'
            stroke='white'
            strokeWidth='0.491046'
          />
        </svg>
      );
    case 'roundtrip':
      return (
        <svg
          width='100%'
          height='100%'
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle cx='50%' cy='50%' r={8} fill='#FF6549' />
        </svg>
      );
    default:
      return (
        <svg
          width='100%'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle cx='50%' cy='50%' r={8} fill='#FF6549' />
        </svg>
      );
  }
};
