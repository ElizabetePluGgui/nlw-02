import React from "react";
import PageHeader from "../../components/PageHeader";

import "./styles.css";

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <button type="submit">Buscar</button>
        </form>
      </PageHeader>
    </div>
  );
}

export default TeacherList;
