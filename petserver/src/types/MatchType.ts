export interface MatchType {
  pet1Id: string
  pet2Id: string
  status: 'pending' | 'accepted' | 'rejected'
  createdAt: Date
}
