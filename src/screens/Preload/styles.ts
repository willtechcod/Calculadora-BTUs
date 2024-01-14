import styles from 'styled-components/native';

export const Container = styles.SafeAreaView`
    background-color: #2B5B96;
    width: 100%;
    height: 100%;
    alignItems: center;
    justifyContent: center;
`;

export const Title = styles.Text`
    color: #1d1d2e;
    fontSize: 18px;
`;

export const Logo = styles.Image`
    width: 250px;
    height: 250px;
    alignItems: center;
    justifyContent: center;
`;
