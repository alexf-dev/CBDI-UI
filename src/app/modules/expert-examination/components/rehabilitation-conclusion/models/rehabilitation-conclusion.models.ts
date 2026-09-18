/**
 * Модель Реабилитационно-экспертная диагностика
 */
export interface RehabilitationDiagnosticsDTO {
    rehabilitationPotential: string | null;
    rehabilitationPrognosis: string | null;
    rehabilitationPrognosisComment: string;
    clinicalPrognosis: string | null;
}

export interface RehabilitationRecommendationsDTO {
    socialRehabilitation: string;
    professionalRehabilitation: string;
}

export interface RehabilitationConclusionDTO {
    diagnostics: RehabilitationDiagnosticsDTO;
    recommendations: RehabilitationRecommendationsDTO;
}

export interface DictionaryOption {
    value: string;
    labelKey: string;
}
