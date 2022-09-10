import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    padding-top: 27px;

    background: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Header = styled.ImageBackground`
    width: 100%;
    height: 250px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.BOLD};
    font-size: 36px;
`;  