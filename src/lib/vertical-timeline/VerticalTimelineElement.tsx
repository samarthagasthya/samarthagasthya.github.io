import React, {CSSProperties, MouseEventHandler, ReactNode} from "react";
import classNames from "classnames";
import {InView} from "react-intersection-observer";


type IntersectionObserverProps = {
    root?: Element | Document | null | undefined;     rootMargin?: string | undefined;     threshold?: number | undefined;     triggerOnce?: boolean | undefined;
};

type VerticalTimelineElementProps = {
    children?: ReactNode | null,
    className?: string,
    contentArrowStyle?: CSSProperties | undefined,
    contentStyle?: CSSProperties | undefined,
    date?: ReactNode | string,
    dateClassName?: string,
    icon?: ReactNode | null,
    iconClassName?: string,
    iconStyle?: CSSProperties | undefined,
    iconOnClick?: MouseEventHandler<Element> | undefined,
    onTimelineElementClick?: MouseEventHandler<Element> | undefined,
    id?: string,
    position?: string,
    style?: CSSProperties | undefined,
    textClassName?: string,
    visible?: boolean,
    shadowSize?: string,
    intersectionObserverProps?: IntersectionObserverProps,
};

const VerticalTimelineElement = ({
    children = null,
    className = "",
    contentArrowStyle = undefined,
    contentStyle = undefined,
    date = "",
    dateClassName = "",
    icon = null,
    iconClassName = "",
    iconOnClick = undefined,
    onTimelineElementClick = undefined,
    iconStyle = undefined,
    id = "",
    position = "",
    style = undefined,
    textClassName = "",
    intersectionObserverProps = {
        rootMargin: "0px 0px -40px 0px",
        triggerOnce: true,
    },
    visible = false,
    shadowSize = "small"
}: VerticalTimelineElementProps) => (
    <InView rootMargin={intersectionObserverProps?.rootMargin} triggerOnce={intersectionObserverProps?.triggerOnce} root={intersectionObserverProps?.root} threshold={intersectionObserverProps?.threshold}>
        {({inView,ref}) => (
            <div ref={ref} id={id}
                 className={classNames(className,'vertical-timeline-element', {
                     'vertical-timeline-element--left': position==="left",
                     'vertical-timeline-element--right': position==="right",
                     'vertical-timeline-element--no-children': children===null,
                 })}
                 style={style}>
                <React.Fragment>
                    <span
                        style={iconStyle}
                        onClick={iconOnClick}
                        className={classNames(iconClassName,
                        'vertical-timeline-element-icon',
                        `shadow-size-${shadowSize}`,
                            {
                                'bounce-in': inView || visible,
                                'is-hidden': !(inView || visible)
                            })}>
                        {icon}
                    </span>
                    <div
                    style={contentStyle}
                    onClick={onTimelineElementClick}
                    className={classNames(textClassName,
                    'vertical-timeline-element-content',{
                        'bounce-in': inView || visible,
                            'is-hidden': !(inView || visible)
                        })}>
                        <div style={contentArrowStyle}
                             className="vertical-timeline-element-content-arrow" />
                        {children}
                        <span className={classNames(dateClassName,'vertical-timeline-element-date')}>
                            {date}
                        </span>

                    </div>
                </React.Fragment>
            </div>
        )}
    </InView>
)

export default VerticalTimelineElement;