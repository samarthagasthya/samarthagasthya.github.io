import {ReactNode} from "react";
import classNames from "classnames";

type VerticalTimelineProps = {
    children?: ReactNode | null,
    className?: string,
    animate?: boolean,
    layout?: "1-column-left" | "1-column" | "2-columns" | "1-column-right",
    lineColor?: string,
}

const VerticalTimeline = ({
    animate = true,
    className = "",
    layout = "2-columns",
    lineColor = "#FFF",
    children
}: VerticalTimelineProps) => {
    if (typeof window === "object") {
        document.documentElement.style.setProperty("--line-color",lineColor)
    }
    return (
        <div className={classNames(className, 'vertical-timeline', {
            'vertical-timeline--animate': animate,
            'vertical-timeline--two-columns': layout === "2-columns",
            'vertical-timeline--one-column-left': layout==="1-column" || layout==="1-column-left",
            'vertical-timeline--one-column-right': layout==="1-column-right"
        })}>
            {children}
        </div>
    )
}

export default VerticalTimeline;