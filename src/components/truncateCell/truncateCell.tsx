import React, { useState } from 'react';
import classNames from 'classnames';
import { splitTextByLimit, splitResultTypes } from './utils/splitTextByLimit';
import { ITruncateCellProps } from './truncateCell.typings';
import './truncateCell.css';

export const TruncateCell: React.FC<ITruncateCellProps> = ({
    children, 
    tailLength,
    title,
    className,
}) => {
    const { begin, tail }: splitResultTypes = splitTextByLimit(children, tailLength);
    const [tailText, _setTailText] = useState<string>(tail);
    const [ellipsisText, _setEllipsisText] = useState<string>(begin);

    return (
        <div
            className={classNames('truncate-call', className)}
            title={title}
        >
            {/* Помещаем полный текст поверх всего контента для эффекта выделения всего текстра для копирования и поиска всей строки */}
            <span className={classNames('full-text')}>{children}</span>
            <span className={classNames('ellipsis-text')}>{ellipsisText}</span>
            <span className={classNames('truncate-tail')}>{tailText}</span>
        </div>
    );
};
