import React from 'react'
import { Img } from './Img/Img'
import { List } from '@mui/material'
import { Text } from './Text/Text'
import { RatingBar } from './RatingBar/RatingBar'
const Review = () => {
  return (
    <div className="flex flex-col md:gap-10 gap-[62px] items-start justify-start max-w-[1312px] mt-20 mx-auto md:px-5 w-full">
    <div className="flex flex-col gap-[26px] items-start justify-start w-[30%] md:w-full">
      <div className="flex flex-col items-center justify-start">
        <Text
          className="sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-900"
          size="txtLatoExtraBold40Bluegray900"
        >
          Reviews
        </Text>
      </div>
      <div className="flex flex-row gap-7 items-center justify-between w-full">
        <div className="flex flex-row gap-[18px] items-center justify-between w-[70%]">
          <Text
            className="sm:text-4xl md:text-[38px] text-[40px] text-gray-900_02 text-right"
            size="txtLatoSemiBold40"
          >
            4.0
          </Text>
          <div className="flex flex-row items-center justify-evenly">
            <RatingBar
              className="border border-solid border-yellow-900 flex justify-between rounded-[1px] w-[194px]"
              value={3}
              starCount={5}
              activeColor="#e4862f"
              size={33}
            ></RatingBar>
          </div>
        </div>
        <Text
          className="text-base text-blue_gray-400 text-right underline"
          size="txtLatoRegular16Bluegray400"
        >
          (21 Reviews)
        </Text>
      </div>
    </div>
    <List
      className="flex flex-col gap-[30px] items-center w-full"
      orientation="vertical"
    >
      <div className="flex flex-1 flex-col gap-[30px] items-center justify-start w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col gap-2 justify-start w-full">
            <div className="flex flex-row md:gap-10 items-start justify-between md:ml-[0] ml-[70px] w-[95%] md:w-full">
              <div className="flex flex-row items-center justify-evenly">
                <RatingBar
                  className="border border-solid border-yellow-900 flex justify-between rounded-[1px] w-[120px]"
                  value={3}
                  starCount={5}
                  activeColor="#e4862f"
                  size={20}
                ></RatingBar>
              </div>
              <Text
                className="text-black-900_90 text-lg"
                size="txtLatoMedium18Black90090"
              >
                12/1/2023
              </Text>
            </div>
            <div className="flex md:flex-col flex-row font-rubik gap-5 items-start justify-start w-[92%] md:w-full">
              <Img
                className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                src="images/profile.webp"
                alt="ellipse198"
              />
              <div className="flex flex-col gap-2.5 items-start justify-start w-auto md:w-full">
                <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                  <Text
                    className="text-black-900 text-xl w-auto"
                    size="txtLatoBold20Black900"
                  >
                    John Doe
                  </Text>
                  <Text
                    className="text-gray-500_02 text-xs w-auto"
                    size="txtRubikRomanRegular12"
                  >
                    <span className="text-gray-500_02 font-rubik text-left font-normal">
                      -{" "}
                    </span>
                    <span className="text-gray-500_02 font-rubik text-left font-normal">
                      The Dracoss Water Filter Purifier Filter
                    </span>
                  </Text>
                </div>
                <Text
                  className="leading-[21.00px] max-w-[1135px] md:max-w-full text-base text-gray-900_02"
                  size="txtRubikRomanRegular16"
                >
                  There are many variations of passages of Lorem Ipsum
                  available, There are many variations of passages of
                  Lorem Ipsum available, but the majority have suffered
                  alteration in some form. There are many variations of
                  passages of Lorem Ipsum available,{" "}
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col gap-2 justify-start w-full">
            <div className="flex flex-row md:gap-10 items-start justify-between md:ml-[0] ml-[70px] w-[95%] md:w-full">
              <div className="flex flex-row items-center justify-evenly">
                <RatingBar
                  className="border border-solid border-yellow-900 flex justify-between rounded-[1px] w-[120px]"
                  value={3}
                  starCount={5}
                  activeColor="#e4862f"
                  size={20}
                ></RatingBar>
              </div>
              <Text
                className="text-black-900_90 text-lg"
                size="txtLatoMedium18Black90090"
              >
                12/1/2023
              </Text>
            </div>
            <div className="flex md:flex-col flex-row font-rubik gap-5 items-start justify-start w-[92%] md:w-full">
              <Img
                className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                src="images/profile.webp"
                alt="ellipse198_One"
              />
              <div className="flex flex-col gap-2.5 items-start justify-start w-auto md:w-full">
                <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                  <Text
                    className="text-black-900 text-xl w-auto"
                    size="txtLatoBold20Black900"
                  >
                    John Doe
                  </Text>
                  <Text
                    className="text-gray-500_02 text-xs w-auto"
                    size="txtRubikRomanRegular12"
                  >
                    <span className="text-gray-500_02 font-rubik text-left font-normal">
                      -{" "}
                    </span>
                    <span className="text-gray-500_02 font-rubik text-left font-normal">
                      The Dracoss Water Filter Purifier Filter
                    </span>
                  </Text>
                </div>
                <Text
                  className="leading-[21.00px] max-w-[1127px] md:max-w-full text-base text-gray-900_02"
                  size="txtRubikRomanRegular16"
                >
                  There are many variations of passages of Lorem Ipsum
                  available, There are many variations of passages of
                  Lorem Ipsum available, but the majority have suffered
                  alteration in some form. There are many variations of
                  passages of Lorem Ipsum available,{" "}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-[30px] items-center justify-start w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col gap-2 justify-start w-full">
            <div className="flex flex-row md:gap-10 items-start justify-between md:ml-[0] ml-[70px] w-[95%] md:w-full">
              <div className="flex flex-row items-center justify-evenly">
                <RatingBar
                  className="border border-solid border-yellow-900 flex justify-between rounded-[1px] w-[120px]"
                  value={3}
                  starCount={5}
                  activeColor="#e4862f"
                  size={20}
                ></RatingBar>
              </div>
              <Text
                className="text-black-900_90 text-lg"
                size="txtLatoMedium18Black90090"
              >
                12/1/2023
              </Text>
            </div>
            <div className="flex md:flex-col flex-row font-rubik gap-5 items-start justify-start w-[95%] md:w-full">
              <Img
                className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                src="images/profile.webp"
                alt="ellipse198"
              />
              <div className="flex flex-col gap-2.5 items-start justify-start w-auto md:w-full">
                <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                  <Text
                    className="text-black-900 text-xl w-auto"
                    size="txtLatoBold20Black900"
                  >
                    John Doe
                  </Text>
                  <Text
                    className="text-gray-500_02 text-xs w-auto"
                    size="txtRubikRomanRegular12"
                  >
                    <span className="text-gray-500_02 font-rubik text-left font-normal">
                      -{" "}
                    </span>
                    <span className="text-gray-500_02 font-rubik text-left font-normal">
                      The Dracoss Water Filter Purifier Filter
                    </span>
                  </Text>
                </div>
                <Text
                  className="text-base text-gray-900_02 w-auto"
                  size="txtRubikRomanRegular16"
                >
                  There are many variations of passages of Lorem Ipsum
                  available, There are many variations of passages of
                  Lorem Ipsum available, but the majority have{" "}
                </Text>
                <div className="flex flex-col items-center justify-start w-1/2 md:w-full md:flex-row md:overflow-x-auto">
                  <div className="flex sm:flex-row flex-row gap-3 items-center justify-between md:flex-row md:w-[22%]">
                    <Img
                      className="h-[152px] md:h-auto object-cover rounded-md"
                      src="images/img_rectangle828053.png"
                      alt="rectangle828053"
                    />
                    <Img
                      className="h-[152px] md:h-auto object-cover rounded-md"
                      src="images/img_rectangle828053.png"
                      alt="rectangle828054"
                    />
                    <Img
                      className="h-[152px] md:h-auto object-cover rounded-md"
                      src="images/img_rectangle828053.png"
                      alt="rectangle828055"
                    />
                    <Img
                      className="h-[152px] md:h-auto object-cover rounded-md"
                      src="images/img_rectangle828053.png"
                      alt="rectangle828056"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col gap-2 justify-start w-full">
            <div className="flex flex-row md:gap-10 items-start justify-between md:ml-[0] ml-[70px] w-[95%] md:w-full">
              <div className="flex flex-row items-center justify-evenly">
                <RatingBar
                  className="border border-solid border-yellow-900 flex justify-between rounded-[1px] w-[120px]"
                  value={3}
                  starCount={5}
                  activeColor="#e4862f"
                  size={20}
                ></RatingBar>
              </div>
              <Text
                className="text-black-900_90 text-lg"
                size="txtLatoMedium18Black90090"
              >
                12/1/2023
              </Text>
            </div>
            <div className="flex md:flex-col flex-row font-rubik gap-5 items-start justify-start w-[93%] md:w-full">
              <Img
                className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                src="images/profile.webp"
                alt="ellipse198_One"
              />
              <div className="flex flex-col gap-2.5 items-start justify-start w-auto md:w-full">
                <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                  <Text
                    className="text-black-900 text-xl w-auto"
                    size="txtLatoBold20Black900"
                  >
                    John Doe
                  </Text>
                  <Text
                    className="text-gray-500_02 text-xs w-auto"
                    size="txtRubikRomanRegular12"
                  >
                    <span className="text-gray-500_02 font-rubik text-left font-normal">
                      -{" "}
                    </span>
                    <span className="text-gray-500_02 font-rubik text-left font-normal">
                      The Dracoss Water Filter Purifier Filter
                    </span>
                  </Text>
                </div>
                <Text
                  className="leading-[21.00px] max-w-[1147px] md:max-w-full text-base text-gray-900_02"
                  size="txtRubikRomanRegular16"
                >
                  There are many variations of passages of Lorem Ipsum
                  available, There are many variations of passages of
                  Lorem Ipsum available, but the majority have suffered
                  alteration in some form. There are many variations of
                  passages of Lorem Ipsum available,{" "}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </List>
  </div>
  )
}

export default Review
