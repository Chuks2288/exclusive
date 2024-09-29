"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import { BoardMemberCard } from './board-member-card';
import { boardMembers } from "@/data";

export const BoardMembers = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper mb-6"
                breakpoints={{
                    480: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 2, // 1 slide for small screens
                    },
                    768: {
                        slidesPerView: 2, // 2 slides for medium screens
                    },
                    1024: {
                        slidesPerView: 3, // 3 slides for large screens
                    },
                }}
            >
                {boardMembers.map((member) => (
                    <SwiperSlide key={member.memberImage}>
                        <BoardMemberCard
                            memberImage={member.memberImage}
                            name={member.name}
                            position={member.position}
                            socials={member.socials}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* Pagination Container */}
            <div className="flex justify-center mt-10">
                <div className="swiper-pagination" />
            </div>
        </>
    );
}
