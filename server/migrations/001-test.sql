--------------------------------------------------------------------------------
-- Up
--------------------------------------------------------------------------------

CREATE TABLE applicants (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    first_name varchar,
    last_name varchar,
    region varchar,
    phone varchar,
    email varchar,
    phone_type varchar,
    source varchar,
    over_21 boolean,
    reason text,
    workflow_state varchar,
    created_at datetime NOT NULL,
    updated_at datetime NOT NULL
);

--------------------------------------------------------------------------------
-- Down
--------------------------------------------------------------------------------
