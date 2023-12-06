import styled from "styled-components";

export const BoxContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

export const ProfileBox = styled.div`
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding: 35px 0;
  @media (min-width: 800px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const BoxContentLittle = styled.div`
  margin: 35px;
  @media (min-width: 800px) {
  }
`;

export const BoxContentImage = styled.div`
  background: #fff;
  text-align: center;
  padding: 0 0 10px 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
  border-radius: 7px;
  overflow: hidden;
`;

export const BoxImageProfileUser = styled.img`
  width: 100%;
  height: 250px;
  background: #ccc;
  margin: 0 auto;
  border-radius: 5px;
  position: sticky;
  object-fit: cover;
`;

export const BoxLabel = styled.label`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  font-size: 14px;
  padding: 0 13px;
  z-index: 1;
  border-radius: 2em;
  line-height: 33px;
`;

export const BoxContentPopularity = styled.div`
  margin: 35px 0;
`;

export const BoxContentInformation = styled.div`
  width: 100%;
`;

export const MensageToProfile = styled.div`
  background-color: #eef7ff;
  padding: 10px;
  margin: 35px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
  border-radius: 7px;
  overflow: hidden;
  @media (min-width: 800px) {
    margin: 0 auto 25px;
  }
`;

export const BoxSimpleInfoProfile = styled.div`
  background: #fff;
  padding: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
  border-radius: 7px;
  margin: 35px;
  overflow: hidden;
  @media (min-width: 800px) {
    margin: 0 auto 25px;
  }
  
`;

export const HeaderBoxSimpleInfoProfile = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  @media (min-width: 800px) {
    margin: 0 auto 25px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ProfileName = styled.div`
  font-size: 25px;
  margin: 0;
  font-weight: 600;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;

  color: rgba(0, 0, 0, 0.87);
    
`;

export const ButtonEdit = styled.div`
  border: 1px solid #039be5;
  border-radius: 3px;
  text-transform: capitalize;
  font-size: 13px;
  padding: 1px 10px;
  display: block;
  transition: all 0.2s;
  color: #039be5;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  align-items: center;
  display: flex;

  &:hover {
    background-color: #039be5;
    color: white;
  }
`;

export const ContentBoxSimpleInfoProfile = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ProfileItemIcon = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px 0 0px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;

  justify-content: space-between;

  @media (min-width: 800px) {
    height: 50px;
    width: 50px;
  }
`;

export const BoxImagesProfile = styled.div`
  background: #fff;
  margin: 35px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
  border-radius: 7px;
  overflow: hidden;
  @media (min-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin: 5px;
  }
`;

export const BoxImagemItem = styled.div`
  width: 100%;
  height: 175px;
  background: #777;
  border-radius: 5px;
  margin: 10px 0;
  @media (min-width: 800px) {
    width: 175px;
    height: 175px;
  }
`;

export const BoxInformationProfile = styled.div`
  background: #fff;
  margin: 0 auto 25px;
  padding: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
  border-radius: 7px;
  overflow: hidden;

  @media (min-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const RowInformationProfile = styled.div``;

export const BoxItemInformation = styled.div``;

export const LineTitle = styled.div`
  margin: 22px 0 8px;
  font-size: 17px;
  font-weight: 500;
`;
