import React from 'react';

export const authors = ['J.R.R. Tolkien', 'J. K. Rowling'];

const AuthorTabsItem = ({ author, isSelected, onSelect }) => {
  const classNames = `author-tabs__item ${
    isSelected ? 'author-tabs__item--selected' : ''
  }`;

  return (
    <li
      className={classNames}
      onClick={() => {
        onSelect(author);
      }}
    >
      {author}
    </li>
  );
};

const AuthorTabs = ({ selectedAuthor, setSelectedAuthor }) => {
  return (
    <div>
      <ul className="author-tabs__list">
        {authors.map((author) => (
          <AuthorTabsItem
            key={author}
            author={author}
            isSelected={author === selectedAuthor}
            onSelect={setSelectedAuthor}
          />
        ))}
      </ul>
    </div>
  );
};

export default AuthorTabs;
