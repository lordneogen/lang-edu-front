"use client";
import { usePathname } from "next/navigation";
import styles from '../css-modules/HomePage.module.css'
import Grid from "@mui/material/Unstable_Grid2";
import Link from "next/link";


const pages = [
    { id: 1, title: "О нас", path: "/about", select: "/about" },
    { id: 2, title: "Регистрация", path: "/reg", select: "/reg" },
    { id: 3, title: "Видео", path: "/video", select: "/video" },
    { id: 4, title: "Текст", path: "/text", select: "/text" },
    { id: 5, title: "Словарь", path: "/voc", select: "/voc" },
    { id: 6, title: "Пакеты словарей", path: "/vocpack", select: "/vocpack" },
];

export default function HomePage({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    return (
        <div>
            <div className={styles.row_main}>
                <div className={styles.row}>
                    <Grid>
                        <svg width="640" height="124" viewBox="0 0 640 124" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1_2)">
                                <rect width="640" height="124" fill="#E1A74D" fill-opacity="0.5" />
                                <g filter="url(#filter0_d_1_2)">
                                    <path d="M453.087 5.29075C486.548 14.2565 497.755 56.0823 473.26 80.5772L330.577 223.26C306.082 247.755 264.256 236.548 255.291 203.087L203.065 8.17865C194.099 -25.282 224.718 -55.9005 258.179 -46.9348L453.087 5.29075Z" fill="#E1B775" fill-opacity="0.5" shape-rendering="crispEdges" />
                                    <path d="M471.139 78.4559L328.456 221.139C305.594 244.001 266.557 233.541 258.189 202.311L205.963 7.40219C197.595 -23.8277 226.172 -52.4051 257.402 -44.037L452.311 8.18853C483.541 16.5566 494.001 55.594 471.139 78.4559Z" stroke="#C28018" stroke-width="6" shape-rendering="crispEdges" />
                                </g>
                                <g filter="url(#filter1_d_1_2)">
                                    <path d="M362.318 47.8409V44.0909H388.5V47.8409H377.523V79H373.295V47.8409H362.318ZM395.024 79V44.0909H416.092V47.8409H399.251V59.6364H415.001V63.3864H399.251V75.25H416.365V79H395.024ZM425.757 44.0909L434.757 58.6136H435.03L444.03 44.0909H449.007L438.03 61.5455L449.007 79H444.03L435.03 64.75H434.757L425.757 79H420.78L432.03 61.5455L420.78 44.0909H425.757ZM452.599 47.8409V44.0909H478.781V47.8409H467.804V79H463.577V47.8409H452.599ZM513.307 61.5455C513.307 65.2273 512.642 68.4091 511.312 71.0909C509.983 73.7727 508.159 75.8409 505.841 77.2955C503.523 78.75 500.875 79.4773 497.898 79.4773C494.92 79.4773 492.273 78.75 489.955 77.2955C487.636 75.8409 485.813 73.7727 484.483 71.0909C483.153 68.4091 482.489 65.2273 482.489 61.5455C482.489 57.8636 483.153 54.6818 484.483 52C485.813 49.3182 487.636 47.25 489.955 45.7955C492.273 44.3409 494.92 43.6136 497.898 43.6136C500.875 43.6136 503.523 44.3409 505.841 45.7955C508.159 47.25 509.983 49.3182 511.312 52C512.642 54.6818 513.307 57.8636 513.307 61.5455ZM509.216 61.5455C509.216 58.5227 508.71 55.9716 507.699 53.892C506.699 51.8125 505.341 50.2386 503.625 49.1705C501.92 48.1023 500.011 47.5682 497.898 47.5682C495.784 47.5682 493.869 48.1023 492.153 49.1705C490.449 50.2386 489.091 51.8125 488.08 53.892C487.08 55.9716 486.58 58.5227 486.58 61.5455C486.58 64.5682 487.08 67.1193 488.08 69.1989C489.091 71.2784 490.449 72.8523 492.153 73.9205C493.869 74.9886 495.784 75.5227 497.898 75.5227C500.011 75.5227 501.92 74.9886 503.625 73.9205C505.341 72.8523 506.699 71.2784 507.699 69.1989C508.71 67.1193 509.216 64.5682 509.216 61.5455ZM520.206 44.0909L530.57 73.4773H530.979L541.342 44.0909H545.774L532.956 79H528.592L515.774 44.0909H520.206ZM555.439 44.0909V79H551.212V44.0909H555.439ZM574.688 79H563.915V44.0909H575.165C578.551 44.0909 581.449 44.7898 583.858 46.1875C586.267 47.5739 588.114 49.5682 589.398 52.1705C590.682 54.7614 591.324 57.8636 591.324 61.4773C591.324 65.1136 590.676 68.2443 589.381 70.8693C588.085 73.483 586.199 75.4943 583.722 76.9034C581.244 78.3011 578.233 79 574.688 79ZM568.142 75.25H574.415C577.301 75.25 579.693 74.6932 581.591 73.5795C583.489 72.4659 584.903 70.8807 585.835 68.8239C586.767 66.767 587.233 64.3182 587.233 61.4773C587.233 58.6591 586.773 56.233 585.852 54.1989C584.932 52.1534 583.557 50.5852 581.727 49.4943C579.898 48.392 577.619 47.8409 574.892 47.8409H568.142V75.25Z" fill="#19477F" />
                                </g>
                                <rect x="6" y="6" width="628" height="112" stroke="#19477F" stroke-width="12" />
                                <path d="M312.75 88.75C311.306 88.75 310.07 88.2355 309.041 87.2065C308.012 86.1775 307.498 84.942 307.5 83.5V41.5C307.5 40.0563 308.015 38.8199 309.044 37.7909C310.073 36.7619 311.308 36.2483 312.75 36.25H344.25C345.694 36.25 346.93 36.7645 347.959 37.7935C348.988 38.8225 349.502 40.058 349.5 41.5V83.5C349.5 84.9438 348.986 86.1801 347.957 87.2091C346.928 88.2381 345.692 88.7518 344.25 88.75H312.75ZM325.875 59.875L332.438 55.9375L339 59.875V41.5H325.875V59.875Z" fill="#19477F" />
                            </g>
                            <defs>
                                <filter id="filter0_d_1_2" x="197.484" y="-48.5159" width="292.984" height="292.984" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="4" />
                                    <feGaussianBlur stdDeviation="2" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_2" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_2" result="shape" />
                                </filter>
                                <filter id="filter1_d_1_2" x="358.318" y="43.6136" width="237.006" height="43.8636" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="4" />
                                    <feGaussianBlur stdDeviation="2" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_2" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_2" result="shape" />
                                </filter>
                                <clipPath id="clip0_1_2">
                                    <rect width="640" height="124" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>



                    </Grid>
                </div>
                <div className={styles.row_button}>
                    <Grid container spacing={4}>
                        {
                            pages.map(({ id, title, path, select }) => (
                                <div className={`${pathname !== select ? styles.title : null} ${pathname.includes(select) ? styles.active : null}`} key={id}>
                                    <Link className={styles.link} key={id} href={path}>
                                        <h4>
                                            {title}
                                        </h4>
                                    </Link>
                                </div>
                            )
                            )
                        }
                    </Grid>
                </div>
            </div>
            {children}
        </div>
    )
}