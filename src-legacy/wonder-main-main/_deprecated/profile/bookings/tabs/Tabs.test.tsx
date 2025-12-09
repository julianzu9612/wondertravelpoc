import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TabComponent from './Tabs';
const tabs = [
  { tabName: 'Tab 1', content: <div>Contenido de la pestaña 1</div> },
  { tabName: 'Tab 2', content: <div>Contenido de la pestaña 2</div> },
  { tabName: 'Tab 3', content: <div>Contenido de la pestaña 3</div> },
  { tabName: 'Tab 4', content: <div>Contenido de la pestaña 4</div> },
  { tabName: 'Tab 5', content: <div>Contenido de la pestaña 5</div> },
];

describe('TabComponent', () => {
  it('muestra el contenido correcto al cambiar de pestaña', async () => {
    const { getByText } = render(<TabComponent tabs={tabs} />);
    // Verificar que el contenido de la primera pestaña esté visible
    expect(getByText('Contenido de la pestaña 1')).toBeInTheDocument();

    // Cambiar a la segunda pestaña
    fireEvent.click(getByText('Tab 2'));

    // Verificar que el contenido de la segunda pestaña esté visible
    expect(getByText('Contenido de la pestaña 2')).toBeInTheDocument();

    // Cambiar a la cuarta pestaña
    fireEvent.click(getByText('Tab 4'));

    // Verificar que el contenido de la cuarta pestaña esté visible
    expect(getByText('Contenido de la pestaña 4')).toBeInTheDocument();

  });
});
