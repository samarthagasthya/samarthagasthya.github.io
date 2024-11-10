import  {ReactNode, memo, JSX} from "react";
import styles from "../styles.module.css";

export type CursorProps = {
    // Enable cursor blinking anim
    cursorBlinking?: boolean;
    // Change cursor style
    cursorStyle?: ReactNode;
    // Change cursor color
    cursorColor?: string;
};

const MemoizedCursor = ({
    cursorBlinking = true,
    cursorStyle = "|",
    cursorColor = "inherit"
}: CursorProps): JSX.Element => (
    <span style={{color: cursorColor}}
          className={`${styles.blinkingCursor} ${cursorBlinking ? styles.blinking : ''}`}>
        {cursorStyle}
    </span>
);

export const Cursor = memo(MemoizedCursor);