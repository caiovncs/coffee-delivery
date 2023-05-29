import styled from 'styled-components'
import { SectionBaseStyle } from '../../styles'

export const SelectedCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 40rem;
`

export const DetailsContainer = styled(SectionBaseStyle)`
  border-radius: 6px 44px 6px 44px;
  display: flex;
  flex-direction: column;
`

export const ConfirmationSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  > button {
    padding: 0.75rem 2.8rem;
    font-weight: 700;
    background: ${({ theme }) => theme.colors['brand-yellow']};
    color: ${({ theme }) => theme.colors['base-white']};
    font-size: ${({ theme }) => theme.textSizes['components-button-g']};
    border-radius: 6px;
    transition: 0.4s;
    border: none;
    line-height: 1.3rem;
    margin-top: 0.7rem;

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: ${({ theme }) => theme.colors['brand-yellow-dark']};
    }
  }
`
