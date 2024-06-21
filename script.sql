-- Table: public.alunos

-- DROP TABLE IF EXISTS public.alunos;

CREATE TABLE IF NOT EXISTS public.alunos
(
    chave_aluno integer NOT NULL DEFAULT nextval('alunos_chave_aluno_seq'::regclass),
    nome_aluno character varying(100) COLLATE pg_catalog."default",
    peso integer,
    altura integer,
    sexo character varying(50) COLLATE pg_catalog."default",
    nivel character varying(50) COLLATE pg_catalog."default",
    idade integer,
    dias integer,
    horas integer,
    lesao character varying(100) COLLATE pg_catalog."default",
    equipdisponivel character varying(100) COLLATE pg_catalog."default",
    limitacao character varying(100) COLLATE pg_catalog."default",
    peso1 character varying(100) COLLATE pg_catalog."default",
    peso2 character varying(100) COLLATE pg_catalog."default",
    peso3 character varying(100) COLLATE pg_catalog."default",
    CONSTRAINT alunos_pkey PRIMARY KEY (chave_aluno)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.alunos
    OWNER to postgres;


    -- Table: public.treinos

-- DROP TABLE IF EXISTS public.treinos;

CREATE TABLE IF NOT EXISTS public.treinos
(
    chave integer NOT NULL DEFAULT nextval('treinos_chave_seq'::regclass),
    chave_aluno integer,
    segunda character varying(2000) COLLATE pg_catalog."default",
    terca character varying(2000) COLLATE pg_catalog."default",
    quarta character varying(2000) COLLATE pg_catalog."default",
    quinta character varying(2000) COLLATE pg_catalog."default",
    sexta character varying(2000) COLLATE pg_catalog."default",
    sabado character varying(2000) COLLATE pg_catalog."default",
    domingo character varying(2000) COLLATE pg_catalog."default",
    obs text COLLATE pg_catalog."default",
    CONSTRAINT treinos_pkey PRIMARY KEY (chave)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.treinos
    OWNER to postgres;