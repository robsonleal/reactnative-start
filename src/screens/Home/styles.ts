import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    background: ${({ theme }) => theme.COLORS.PRIMARY_700};
    justify-content: center;
`;

export const TextButton = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.BOLD};
    color: ${({ theme }) => theme.COLORS.TEXT };
    font-size: 24px;
    text-transform: uppercase;
`;

export const Button = styled.TouchableOpacity`
    background: ${({ theme }) => theme.COLORS.PRIMARY_900};
    margin: 32px;
    padding: 18px;
    border-radius: 8px;
`;