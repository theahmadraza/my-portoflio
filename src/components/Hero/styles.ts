import styled from "styled-components";

export const Container = styled.section`
  padding-top: 15%;
  display: flex;
  justify-content: space-between;
  gap: 8rem;
  background: rgba(0,0,0,0);
.hard-skills{
    margin-bottom : 5rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;
  }
  .hability{
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
      width: 3.4rem;
    }
  }
  .hero-text{
    & > p{
      font-size: 1.8rem;
    }
    h1{
      font-size: 7rem;
    }

    h3{
      color:var(--green);
      margin: 1rem 0;
    }

    
    p.small-resume {
      margin-bottom: 5rem;
    }
  }
// New added
  .social-media{
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding-top:5rem;
    padding-left:1rem;

    img,span{
      font-size: 3rem;
      width: 3.5rem;
    }
  }


  .button{
    margin-top: 5rem;
    padding: 1.4rem 6rem;
    margin-right: 2rem;
  }

  .hero-image{
    img{
      max-width: 500px;
    }
  }

.element {
  margin-top : 5rem;
  width: 9rem; /* equivalent to w-36 */
  min-width: fit-content; /* equivalent to min-w-fit */
  height: fit-content; /* equivalent to h-fit */
  display: flex; /* equivalent to flex */
  flex-direction: column; /* equivalent to flex-col */
  align-items: center; /* equivalent to items-center */
  justify-content: center; /* equivalent to justify-center */
  transition: all 0.5s; /* equivalent to transition-all duration-500 */
  margin: 0.75rem; /* equivalent to m-3 */
  border-radius: 0.5rem; /* equivalent to rounded-lg */
  position: relative; /* equivalent to relative */
  cursor: pointer; /* equivalent to cursor-pointer */
}

@media (min-width: 640px) {
  .element {
    margin: 1.25rem; /* equivalent to sm:m-5 */
  }
}

.element:hover {
  transform: scale(1.15); /* equivalent to hover:scale-[1.15] */
}

.element-child {
  height: 100%; /* equivalent to h-full */
  width: 100%; /* equivalent to w-full */
  border-radius: 0.5rem; /* equivalent to rounded-lg */
  border: 1px solid #1f223c; /* equivalent to border-[#1f223c] */
  background-color: #11152c; /* equivalent to bg-[#11152c] */
  box-shadow: none; /* equivalent to shadow-none */
  transition: all 0.5s; /* equivalent to transition-all duration-500 */
}

/* Shadow color */
.element-child {
  box-shadow: 0 0 #d1d5db; /* equivalent to shadow-gray-50 */
}

/* Hover effect */
.element-child:hover {
  border-color: #8b5cf6; /* equivalent to group-hover:border-violet-500 */
}




  @media(max-width: 960px){
    display: block;
    margin-top: 15%;
    .hero-text{

      h1{
        font-size: 5rem;
      }
    }
    
    .hero-image{
      display: none;
    }
  }

  @media(max-width: 600px){
    margin-top: 35%;
  }
  @media(max-width: 480px){
    margin-top: 45%;
  }
`