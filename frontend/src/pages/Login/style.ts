import styled from 'styled-components'


export const Container = styled.div`
   height: 100vh;

   display: flex;
   flex: 1;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   align-content: center;
   background-color: #001529;

`
export const FormContainer = styled.div`
   width: 300px;
   height: 300px;
 
   padding: 30px;
   border-radius: 10px;
   background-color: white;
`
export const Title = styled.div`
   color: #001529;
   font-size: 25px;
   margin-bottom: 10px;

`

export const Logo = styled.div`
   display: flex;
   align-content: center;

   margin-bottom: 10px;

   > h1 {
      color: #FFF;
      margin-left: 10px ;
      margin-top: 12px;
   }

   > img {
      width: 50px;
      height: 50px;
   }
`
